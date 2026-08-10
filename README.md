# Casa Buenos Aires — guía de actualización

## Publicar los cambios

Desde esta carpeta, ejecutá:

```bash
git add .
git commit -m "Rediseño de la guía de bienvenida"
git push
```

Netlify detecta el último comando y actualiza el sitio automáticamente.

## Restaurantes y actividades semanales

Todo el contenido variable está preparado en `content.js`.

- Para los restaurantes, agregá un objeto dentro de `restaurants` con nombre, detalle y link de Google Maps.
- Para la agenda semanal, reemplazá `week` e `items` con la selección de esa semana. El sitio mostrará esos datos dentro de la página; `sourceUrl` permite guardar el link original como referencia, pero no se muestra al huésped.

Ejemplo de una actividad:

```js
{
  type: { es: 'MÚSICA', en: 'MUSIC' },
  title: { es: 'Concierto al aire libre', en: 'Open-air concert' },
  details: { es: 'Sábado · 19 h · Palermo', en: 'Saturday · 7 pm · Palermo' }
}
```

Si me enviás el enlace semanal y los restaurantes, puedo preparar y cargar esta información por vos.
