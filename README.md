# Edicson Abel | Blog
En este sitio encontraras varios apartados que me gustaría compartir con ustedes, ya sean artículos, proyectos realizados, información acerca de mí y algunas cosas más que estaré añadiendo.

## Desarrollo 

### Archivos en la carpeta `.vscode`
Creamos la carpeta con el comando
```sh
# Mac OS, Linux
mkdir .vscode
```
y posteriormente creamos lo siguientes archivos

#### `settings.json`
Creamos el archivo

```sh
# Mac OS, Linux
touch .vscode/settings.json
```
Ingresamos la configuración siguiente
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```