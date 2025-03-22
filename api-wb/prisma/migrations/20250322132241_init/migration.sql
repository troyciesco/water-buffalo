-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "category_item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT,
    "categoryId" TEXT NOT NULL,
    CONSTRAINT "category_item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "primary" TEXT NOT NULL,
    "aliases" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "_CategoryItemToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CategoryItemToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "category_item" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryItemToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryItemToTag_AB_unique" ON "_CategoryItemToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryItemToTag_B_index" ON "_CategoryItemToTag"("B");
