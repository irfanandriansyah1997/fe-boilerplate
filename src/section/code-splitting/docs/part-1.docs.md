## ⏳ Code Splitting

tujuan dari penggunaan dari code splitting adalah menguraikan resource atau `chunks` yang tidak dibutuhkan secara langsung.

cara menggunakan code splitting sangatlah mudah yang anda butuhkan adalah melakukan `lazy loading` pada component tersebut dan membuat `shimer` atau `loading screen` yang berguna untuk informasi bahwa browser sedang melakukan pengunduhan `chunks` yang nantinya akan ditampilkan.

### 1. Lazy Load Component
Hal pertama yang dilakuin membuat sebuah  constant yang berisi component, ditahap ini component yang nantinya akan diimport akan di enkapsulasi oleh method `React.lazy` yang berguna untuk memberi tahu bahwa component ini akan diload kapan saja.
```js
import { lazy } from 'react';

const CustomComponent = lazy(() => import(`./components/custom-component`));
```


### 2. Register Suspense
Langkah selanjutnya yang harus dilakukan adalah memasang `React.Suspense`, hal ini berguna untuk memberikan overlay pada saat component sedang di load secara paralel.

```js
import { FC, lazy, Suspense, useState } from 'react';

import NavbarToggle from './components/navbar-toggle';
import style from './style/part-1.module.css';

const CustomComponent = lazy(() => import(`./components/custom-component`));

/**
 * Code Splitting Part 1
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.14
 */
const CodeSplittingPart1: FC = () => {
  const [showCustomComponent, toggleShowCustomComponent] = useState(false);

  return (
    <div className={style[`part-1`]}>
      <NavbarToggle
        active={showCustomComponent}
        onToggle={toggleShowCustomComponent}
      />
      <Suspense fallback={<div>Loading...</div>} >
        {showCustomComponent && <CustomComponent />}
      </Suspense>
    </div>
  );
};

export default CodeSplittingPart1;
```

#### 📝 Penjelasan Code
- **di baris 6** kita mendaftarkan sebuah component yang di enkapsulasi oleh `React.lazy` yang nantinya akan membentuk sebuah chunks yang akan di load sesuai trigger yang telah ditentukan.
- **di baris 14** kita membuat sebuah state yang berguna untuk melakukan toggle untuk menampilkan atau menghilangkan `CustomComponent` yang telah kita daftarkan **di baris 6**.
- **di baris 22 - 24** kita mendaftar `React.Suspense` yang berguna untuk mengatur proses load sebuah chunks, by default apabila terjadi error atau proses load sebuah component maka yang akan dirender adalah html tag / component yang telah kita daftarkan pada props `fallback`. Sedangkan apabila telah selesai melakukan pengunduhan `chunks` tersebut yang akan ditampilkan di browser adalah component `chunks`.

#### 🖥 Output
![part-1](/gif/code-splitting/part-1.gif)
