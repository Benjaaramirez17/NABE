# 📦 INVENTARIO — Control de stock de insumos

Planilla `STOCKINSUMO.xlsx` para el control de stock, recetas y costos de los productos de papelería NABE.

## Hojas

| Hoja | Para qué sirve |
|------|----------------|
| **INICIO** | Panel resumen: insumos bajos/agotados, valor en stock y valor perdido en mermas. |
| **INSUMOS** | Lista de insumos. Llenás *Stock inicial* y *Costo base* (columna N); el resto se calcula solo. |
| **PRODUCTOS** | Lista de productos que fabricás. |
| **RECETAS** | Qué insumos y cuánto lleva cada producto. |
| **COMPRAS** | Registro de compras: el stock sube solo y se calcula el *Precio unitario* de cada compra. |
| **PERDIDAS** | ⚠️ Registro de errores/mermas: insumos dañados, mal impresos o extraviados. Se descuentan solos del stock y ves cuánta plata perdiste. |
| **PRODUCCION** | Registro de lo que fabricás; los insumos se descuentan según la receta. |
| **COSTOS** | 💰 Costo de fabricación por producto, con un ejemplo armado (Libreta A6 - 50 Hojas) y precio de venta sugerido. |

## Cómo funcionan los precios (solo suben)

- En **INSUMOS** llenás una sola vez el **Costo base** (columna N).
- Cada compra en **COMPRAS** calcula su precio unitario (costo total ÷ cantidad).
- El **Costo unitario** (columna K) toma automáticamente **el mayor** entre el costo base y todo lo pagado en compras: si un insumo sube de precio se actualiza, si baja se mantiene.

## Cómo registrar una pérdida

En la hoja **PERDIDAS** agregás una fila con fecha, insumo (lista desplegable), cantidad y motivo (error de impresión, corte mal hecho, se dañó, etc.). El stock en INSUMOS se descuenta solo y el costo de lo perdido aparece en el panel INICIO.

## Cómo calcular el costo de un producto

En la hoja **COSTOS** está el ejemplo de la *Libreta A6 - 50 Hojas*: elegís el producto en la celda amarilla y listás sus insumos; la cantidad sale sola de RECETAS y el costo de INSUMOS. Para otro producto, copiá el bloque completo (A4:D22) y pegalo más abajo.
