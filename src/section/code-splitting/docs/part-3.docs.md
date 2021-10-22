## 🎩 Webpack Magic Comment

Selain menggunakan `eager load` kita juga dapat menggunakan webpack magic comment untuk mengatur kapan untuk mengunduh `chunks`. berikut adalah beberapa contoh dari penggunaan webpack magic comment:

- `webpackPrefetch` syntax ini berguna untuk meload awal chunks diawal tanpa harus melakukan eksekusi chunks tersebut. Dengan catatan parent dari chunks tersebut harus selesai di muat dalam browser
- `webpackPreload` syntax ini berguna untuk meload awal chunks diawal dan menjadi salah satu mandatory file.

### 1. Ubah Metode Load Component
Hal pertama yang dilakukan adalah mengubah cara load sebuah component, agar lebih mudah cukup buat sebuah function yang berisi hasil `import component`.

```jsx
import { lazy } from 'react';

/**
 * Load Custom Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const loadCustomComponent = () =>
  import(/* webpackPrefetch: true */ `./components/custom-component`);

const CustomComponent = lazy(loadCustomComponent);
```


#### 📝 Penjelasan Code
- **di baris 8-9** disini kita hanya menambahkan text `webpackPrefetch` yang berguna untuk melakukan load awal chunks tersebut tanpa harus di proses. Apabila anda menginginkan preload chunks tersebut anda dapat mengubah `webpackPrefetch` menjadi `webpackPreload`.


#### 🖥 Output
![part-2](/png/code-splitting/part-3.png)

> ℹ️ didalam tag head akan muncul berupa link tag yang berisi pre-fetch chunks asset. untuk dokumentasi lebih lanjut dapat merujuk dokumentasi [webpack](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules).