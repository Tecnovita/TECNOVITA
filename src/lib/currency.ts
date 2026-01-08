/**
 * Formatea un valor numérico como una cadena de moneda en Pesos Argentinos (ARS).
 * No incluye decimales.
 * @param value - El valor numérico a formatear (debe ser un número finito).
 * @returns Una cadena representando el valor formateado como ARS (ej. "$ 1.234.567").
 */
export function formatARS(value: number): string {
  // Crea un formateador de números específico para ARS.
  // 'es-AR' define el idioma y formato regional.
  // 'currency' indica que el estilo de formato es monetario.
  // 'ARS' especifica la moneda a usar.
  // 'maximumFractionDigits: 0' asegura que no se muestren decimales.
  // 'minimumFractionDigits: 0' (implícito con maximumFractionDigits: 0) asegura que los valores enteros no tengan ".00".
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
    // minimumFractionDigits: 0, // Opcional, ya está implícito si maximumFractionDigits es 0
  }).format(value); // Aplica el formato al valor numérico.
}