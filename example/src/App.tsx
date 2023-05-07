import { Modal } from '@solo5star/react-modal';
import { useState } from 'react';
import { styled } from 'styled-components';
import './App.css';

const MyModal = {
  ...Modal,
  Content: styled(Modal.Content)`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: hsl(0, 0%, 16%);
    border-radius: 8px;

    @media (prefers-color-scheme: light) {
      background: hsl(0, 0%, 100%);
    }
  `,
};

const ModalPlacementPanel = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
`;

const ToTop = styled.button`
  grid-area: 1 / 2 / 1 / 2;
`;

const ToBottom = styled.button`
  grid-area: 3 / 2 / 3 / 2;
`;

const ToLeft = styled.button`
  grid-area: 2 / 1 / 2 / 1;
`;

const ToRight = styled.button`
  grid-area: 2 / 3 / 2 / 3;
`;

const ToCenter = styled.button`
  grid-area: 2 / 2 / 2 / 2;
`;

type Placement = React.ComponentProps<typeof MyModal.Content>['placement'];

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlacement, setModalPlacement] = useState<Placement>('center');

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <main>
        <h1>Here is a modal example!</h1>
        <p>👇 By clicking the button, pay close attention to what happens!</p>
        <button onClick={handleModalOpen}>Open Modal</button>
      </main>

      <MyModal.Root open={modalOpen} onClose={handleModalClose}>
        <MyModal.Backdrop onClick={handleModalClose} />
        <MyModal.Content placement={modalPlacement}>
          <h1>Whoa! 🎉 The wild modal has appeared! ✨</h1>
          <p>It's small and lightweight, but also the beginning of a great journey!</p>

          <ModalPlacementPanel>
            <ToTop onClick={() => setModalPlacement('top')}>Top</ToTop>
            <ToBottom onClick={() => setModalPlacement('bottom')}>Bottom</ToBottom>
            <ToLeft onClick={() => setModalPlacement('left')}>Left</ToLeft>
            <ToRight onClick={() => setModalPlacement('right')}>Right</ToRight>
            <ToCenter onClick={() => setModalPlacement('center')}>Center</ToCenter>
          </ModalPlacementPanel>
        </MyModal.Content>
      </MyModal.Root>
    </>
  );
}

export default App;
