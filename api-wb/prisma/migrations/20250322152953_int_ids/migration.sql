/*
  Warnings:

  - The primary key for the `Workflow` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Workflow` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `A` on the `_StepToTag` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `stage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `stage` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `workflowId` on the `stage` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `step` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `step` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `stageId` on the `step` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Workflow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Workflow" ("id", "name") SELECT "id", "name" FROM "Workflow";
DROP TABLE "Workflow";
ALTER TABLE "new_Workflow" RENAME TO "Workflow";
CREATE TABLE "new__StepToTag" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_StepToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "step" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_StepToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__StepToTag" ("A", "B") SELECT "A", "B" FROM "_StepToTag";
DROP TABLE "_StepToTag";
ALTER TABLE "new__StepToTag" RENAME TO "_StepToTag";
CREATE UNIQUE INDEX "_StepToTag_AB_unique" ON "_StepToTag"("A", "B");
CREATE INDEX "_StepToTag_B_index" ON "_StepToTag"("B");
CREATE TABLE "new_stage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "workflowId" INTEGER NOT NULL,
    CONSTRAINT "stage_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_stage" ("id", "name", "workflowId") SELECT "id", "name", "workflowId" FROM "stage";
DROP TABLE "stage";
ALTER TABLE "new_stage" RENAME TO "stage";
CREATE TABLE "new_step" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "order" INTEGER NOT NULL,
    "stageId" INTEGER NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "step_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "stage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "step_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_step" ("categoryId", "description", "icon", "id", "name", "order", "stageId") SELECT "categoryId", "description", "icon", "id", "name", "order", "stageId" FROM "step";
DROP TABLE "step";
ALTER TABLE "new_step" RENAME TO "step";
CREATE UNIQUE INDEX "step_stageId_order_key" ON "step"("stageId", "order");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
