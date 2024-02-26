/*
  Warnings:

  - You are about to drop the column `sectionId` on the `Paragraph` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Paragraph" DROP CONSTRAINT "Paragraph_sectionId_fkey";

-- AlterTable
ALTER TABLE "Paragraph" DROP COLUMN "sectionId";

-- CreateTable
CREATE TABLE "_ParagraphToSection" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ParagraphToSection_AB_unique" ON "_ParagraphToSection"("A", "B");

-- CreateIndex
CREATE INDEX "_ParagraphToSection_B_index" ON "_ParagraphToSection"("B");

-- AddForeignKey
ALTER TABLE "_ParagraphToSection" ADD CONSTRAINT "_ParagraphToSection_A_fkey" FOREIGN KEY ("A") REFERENCES "Paragraph"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParagraphToSection" ADD CONSTRAINT "_ParagraphToSection_B_fkey" FOREIGN KEY ("B") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
