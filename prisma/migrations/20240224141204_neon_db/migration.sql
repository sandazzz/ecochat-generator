/*
  Warnings:

  - You are about to drop the `_ParagraphToSection` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sectionId` to the `Paragraph` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ParagraphToSection" DROP CONSTRAINT "_ParagraphToSection_A_fkey";

-- DropForeignKey
ALTER TABLE "_ParagraphToSection" DROP CONSTRAINT "_ParagraphToSection_B_fkey";

-- AlterTable
ALTER TABLE "Paragraph" ADD COLUMN     "sectionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ParagraphToSection";

-- AddForeignKey
ALTER TABLE "Paragraph" ADD CONSTRAINT "Paragraph_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
