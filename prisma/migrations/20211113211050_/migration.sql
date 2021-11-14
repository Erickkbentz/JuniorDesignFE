/*
  Warnings:

  - You are about to drop the column `inputLocation` on the `Job` table. All the data in the column will be lost.
  - Added the required column `inputType` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "inputType" TEXT NOT NULL,
    "jobName" TEXT NOT NULL,
    "createTime" TEXT,
    "status" TEXT NOT NULL,
    "fileLocation" TEXT,
    "url" TEXT,
    "outputLocation" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Job_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Job" ("authorId", "createTime", "id", "jobName", "outputLocation", "status") SELECT "authorId", "createTime", "id", "jobName", "outputLocation", "status" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE UNIQUE INDEX "Job_jobName_key" ON "Job"("jobName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
