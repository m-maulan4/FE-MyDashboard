# Gunakan Nginx sebagai base image
FROM nginx:alpine

# Hapus konfigurasi default nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy hasil build React ke direktori yang digunakan Nginx untuk serve file
COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan Nginx di background
CMD ["nginx", "-g", "daemon off;"]
