touch ./src/api/apiUrl.ts
echo "const BACKEND_URI = '$APPSETTING_API_ENDPOINT';" > ./src/api/apiUrl.ts
NODE_OPTIONS='--max_old_space_size=16384'

tsc && vite build
