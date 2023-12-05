-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "shop" TEXT,
    "token" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT,
    "lock" TEXT,
    "task" TEXT,
    "priority" DECIMAL,
    "added" SERIAL NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("added")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_id_key" ON "tasks"("id");
