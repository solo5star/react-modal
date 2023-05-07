# @solo5star/react-modal <!-- omit from toc -->

[**@solo5star/react-modal**](https://github.com/solo5star/react-modal)은 React를 위한 가장 간단한 모달 구현을 제공해주는 라이브러리입니다.

이 라이브러리를 사용하기 위해선 `react@^18.0.0`, `react-dom@^18.0.0`, `styled-components@^6.0.0` 이 필요합니다.

* [**Storybook**](https://solo5star.github.io/react-modal/storybook/)
* [**Example**](https://solo5star.github.io/react-modal/example/)

<br><br>

## Table of Contents <!-- omit from toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Features](#features)
- [Inject style using `styled-components`](#inject-style-using-styled-components)

<br><br>

## Installation

[**npm**](https://npmjs.org/) 혹은 [**yarn**](https://yarnpkg.com/), [**pnpm**](https://pnpm.io/) 을 사용할 수 있습니다.

For npm:
```bash
$ npm install react react-dom styled-components
$ npm install @solo5star/react-modal
```

For yarn:
```bash
$ yarn add react react-dom styled-components
$ yarn add @solo5star/react-modal
```

For pnpm:
```bash
$ pnpm add react react-dom styled-components
$ pnpm add @solo5star/react-modal
```

<br><br>

## Getting Started

```tsx
import { useState } from 'react';
import { Modal } from 'react-modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <button onClick={handleModalOpen}>Open Modal</button>

      <Modal.Root open={modalOpen} onClose={handleModalClose}>
        <Modal.Backdrop onClick={handleModalClose}>
        <Modal.Content>
          <h1>Hello! 👋 Welcome to Modal</h1>

          <button onClick={handleModalClose}>Close</button>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}
```

<br><br>

## Features

* ESM과 CJS 모두 지원합니다.
* styled-components를 사용한 스타일 주입을 지원합니다.

<br><br>

## Inject style using `styled-components`

![Example Styled Modal](https://user-images.githubusercontent.com/20203944/236696117-b065488d-32f4-40cb-918c-980448bf08c7.png)

```tsx
import { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-modal';

const MyModal = {
  ...Modal,
  Backdrop: styled(Modal.Backdrop)`
    background: linear-gradient(
      to top,
      rgba(68, 207, 163, 0.8),
      rgba(68, 207, 163, 0.2),
      transparent 80%
    );
    opacity: 0.4;
  `,
  Content: styled(Modal.Content)`
    padding: 24px;

    background: hsl(0, 0%, 16%);
    border-radius: 24px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    @media (prefers-color-scheme: light) {
      background: hsl(0, 0%, 100%);
    }
  `,
};

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <button onClick={handleModalOpen}>Open Modal</button>

      <MyModal.Root open={modalOpen} onClose={handleModalClose}>
        <MyModal.Backdrop onClick={handleModalClose} />
        <MyModal.Content placement={modalPlacement}>
          <h1>Sample Modal!</h1>
        </MyModal.Content>
      </MyModal.Root>
    </>
  )
}
```
