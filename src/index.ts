// Responsabilité
// Template de produit
export interface Product {
  id: string;
  name: string;
}

export enum ProductUnitStatus {
  IN_PROGRESS = "IN_PROGRESS",
  SELLABLE = "SELLABLE",
  SOLD = "SOLD",
}

// Objet vendable
export interface ProductUnit {
  id: string;
  product: Product;
  price: number;
  status: ProductUnitStatus;
  createdAt: Date;
  lastUpdatedAt: Date;
}

// Tâche 1 : créer une fonction pour créer un ProductUnit
