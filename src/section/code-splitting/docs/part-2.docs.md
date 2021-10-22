## ⏳ Eager Load

setelah kita telah melakukan `code splitting` agar browser hanya melakukan pengunduhan JS yang dibutuhkan, akan tetapi apabila sebuah chunks mempunyai ukuran yang cukup besar makan pada saat melakukan load component akan terdapat `jaggy` atau seperti ada kesan perubahan scroll secara mendadak.

Maka dari itu perlu adanya `eager load`, `eager load` adalah sebuah metode dimana kita akan melakukan pengunduhan `chunks` lebih awal sesuai dengan trigger yang telah ditentukan.

### 1. Ubah Metode Load Component
Hal pertama yang dilakukan adalah mengubah cara load sebuah component, agar lebih mudah cukup buat sebuah function yang berisi hasil `import component`.

```js
import { lazy } from 'react';

/**
 * Load Custom Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const loadCustomComponent = () => import(`./components/custom-component`);

const CustomComponent = lazy(loadCustomComponent);
```

### 2. Daftarkan Trigger Untuk Melakukan Eager Load
Hal kedua adalah melakukan update props navbar toggle component, didalam component tersebut terdapat beberapa props yang nantinya akan menjadi trigger browser akan load chunks file.

```js
import { FC, lazy, Suspense, useState } from 'react';

import NavbarToggle from './components/navbar-toggle';
import style from './style/part-2.module.css';

/**
 * Load Custom Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const loadCustomComponent = () => import(`./components/custom-component`);

const CustomComponent = lazy(loadCustomComponent);

/**
 * Code Splitting Part 2
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const CodeSplittingPart2: FC = () => {
  const [showCustomComponent, toggleShowCustomComponent] = useState(false);

  return (
    <div className={style[`part-2`]}>
      <NavbarToggle
        active={showCustomComponent}
        onFocus={loadCustomComponent}
        onMouseOver={loadCustomComponent}
        onToggle={toggleShowCustomComponent}
      />
      <Suspense fallback={<div>Loading...</div>}>
        {showCustomComponent && <CustomComponent />}
      </Suspense>
    </div>
  );
};

export default CodeSplittingPart2;
```

#### 📝 Penjelasan Code
- **di baris 11** kita akan mebuat sebuah method yang bernama `loadCustomComponent` yang berisi hasil load chunks file (`promise`).
- **di baris 13** kita mendaftarkan sebuah component yang di enkapsulasi oleh `React.lazy` yang nantinya akan membentuk sebuah chunks yang akan di load sesuai trigger yang telah ditentukan.
- **di baris 21** kita membuat sebuah state yang berguna untuk melakukan toggle untuk menampilkan atau menghilangkan `CustomComponent` yang telah kita daftarkan **di baris 13**.
- **di baris 27** kita akan mendaftarkan props `onFocus` yang akan di invoke apabila user melakukan fokus cursor ke component navbar dan props `onMouseOver` apabila user menggeserkan cursor ke component navbar. Kedua props tersebut memanggil method `loadCustomComponent` yang berguna untuk melakukan `eager load` custom component.
- **di baris 31 - 33** kita mendaftar `React.Suspense` yang berguna untuk mengatur proses load sebuah chunks, by default apabila terjadi error atau proses load sebuah component maka yang akan dirender adalah html tag / component yang telah kita daftarkan pada props `fallback`. Sedangkan apabila telah selesai melakukan pengunduhan `chunks` tersebut yang akan ditampilkan di browser adalah component `chunks`.

#### 🖥 Output
![part-2](/gif/code-splitting/part-2.gif)

> ℹ️ trigger ketika user melakukan hover pada button group `active` & `inactive`.