// src/types/routes.d.ts

// Definimos explícitamente los IDs de servicio válidos
export type ServiceId = 'informatica' | 'electricidad' | 'telefonia';

// Props tipadas para la página de servicios
export interface AppServicePageProps {
  params: {
    serviceId: ServiceId;
  };
}
