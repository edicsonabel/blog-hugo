# Edicson Abel | Blog
En este sitio encontraras varios apartados que me gustaría compartir con ustedes, ya sean artículos, proyectos realizados, información acerca de mí y algunas cosas más que estaré añadiendo.

## Desarrollo 

### Configuración en Visual Studio Code
Creamos la carpeta `.vscode` con el comando
```sh
# macOS, Linux
mkdir .vscode
```
 posteriormente creamos lo siguientes archivos

#### `settings.json`
Creamos el archivo

```sh
# macOS, Linux
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