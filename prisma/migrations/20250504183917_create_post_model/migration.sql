/*
  Warnings:

  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customerPayments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `domains` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verificationTokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workspaces` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_fkey";

-- DropForeignKey
ALTER TABLE "customerPayments" DROP CONSTRAINT "customerPayments_customerId_fkey";

-- DropForeignKey
ALTER TABLE "domains" DROP CONSTRAINT "domains_addedById_fkey";

-- DropForeignKey
ALTER TABLE "domains" DROP CONSTRAINT "domains_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_email_fkey";

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_inviter_fkey";

-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_userId_fkey";

-- DropForeignKey
ALTER TABLE "workspaces" DROP CONSTRAINT "workspaces_creatorId_fkey";

-- DropTable
DROP TABLE "accounts";

-- DropTable
DROP TABLE "customerPayments";

-- DropTable
DROP TABLE "domains";

-- DropTable
DROP TABLE "members";

-- DropTable
DROP TABLE "sessions";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "verificationTokens";

-- DropTable
DROP TABLE "workspaces";

-- DropEnum
DROP TYPE "InvitationStatus";

-- DropEnum
DROP TYPE "SubscriptionType";

-- DropEnum
DROP TYPE "TeamRole";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
