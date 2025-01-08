-- CreateTable
CREATE TABLE "Petshop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "Petshop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vaccinated" BOOLEAN NOT NULL,
    "deadline_vaccination" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "petshopId" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Petshop_cnpj_key" ON "Petshop"("cnpj");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_petshopId_fkey" FOREIGN KEY ("petshopId") REFERENCES "Petshop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
