-- CreateTable
CREATE TABLE "Workflow" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "stage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "workflowId" TEXT NOT NULL,
    CONSTRAINT "stage_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "Workflow" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "step" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "order" INTEGER NOT NULL,
    "stageId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "step_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "stage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "step_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_StepToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_StepToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "step" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_StepToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "step_stageId_order_key" ON "step"("stageId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "_StepToTag_AB_unique" ON "_StepToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_StepToTag_B_index" ON "_StepToTag"("B");
