/*
  Warnings:

  - You are about to drop the column `roles` on the `health_unities` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "health_unities" DROP COLUMN "roles";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "roles" SET DEFAULT ARRAY['USER']::TEXT[];
