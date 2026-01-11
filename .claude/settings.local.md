# Local Settings - The Don Wagon

## Project Preferences

- Prefer editing existing files over creating new ones
- Use Tailwind CSS utilities, avoid custom CSS
- Mobile-first responsive design
- Keep components simple and focused

## Port Configuration

Development server runs on port **8210** (Docker maps to internal 4321).
Access at: http://localhost:8210

## Build Output

Static files output to `dist/` folder for deployment.

## Docker Services

- `dev` - Development with hot reload (port 8210)
- `prod` - Production Nginx server (port 80)
