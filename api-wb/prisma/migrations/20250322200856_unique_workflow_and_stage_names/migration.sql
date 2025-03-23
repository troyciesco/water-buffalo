/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Workflow` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,workflowId]` on the table `stage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Workflow_name_key" ON "Workflow"("name");

-- CreateIndex
CREATE UNIQUE INDEX "stage_name_workflowId_key" ON "stage"("name", "workflowId");
