-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "servicoInteresse" TEXT NOT NULL,
    "mensagem" TEXT,
    "idioma" TEXT NOT NULL DEFAULT 'en',
    "origem" TEXT,
    "paginaOrigem" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "deviceType" TEXT,
    "status" TEXT NOT NULL DEFAULT 'novo',
    "prioridade" TEXT NOT NULL DEFAULT 'media',
    "notasInternas" TEXT,
    "dataContato" DATETIME,
    "responsavel" TEXT
);

-- CreateIndex
CREATE INDEX "Lead_email_idx" ON "Lead"("email");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
