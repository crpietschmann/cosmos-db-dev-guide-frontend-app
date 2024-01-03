touch ./src/api/apiUrl.ts
echo "var APPSETTING_API_ENDPOINT = '$APPSETTING_API_ENDPOINT';" > ./src/api/apiUrl.ts
NODE_OPTIONS='--max_old_space_size=16384'

tsc && vite build
