import React from 'react'
import styled, { css } from 'styled-components'

type SpoilerProps = {
  children: React.ReactNode
} & React.BaseHTMLAttributes<HTMLDivElement>

const SpoilerComponent = styled.div`
  background: var(
    --${(props: { show: boolean }) => (props.show ? 'spoiler-background-show' : 'spoiler-background')}
  );
  transition: all 0.1s;
  display: inline-block;
  cursor: ${(props: { show: boolean }) => (props.show ? 'auto' : 'pointer')};
  border-radius: 3px;

  ${(props) =>
    !props.show &&
    css`
      &:hover {
        background: var(--spoiler-background--hover);
      }
    `}
`

const SpoilerContent = styled.div`
  color: ${({ show }: { show: boolean }) =>
    show ? 'var(--text-normal)' : '#00000000'};
  user-select: ${({ show }: { show: boolean }) => (show ? 'auto' : 'none')};
`

const Spoiler = ({ children, ...props }: SpoilerProps) => {
  const [show, setShow] = React.useState(false)

  return (
    <SpoilerComponent
      show={show}
      onClick={() => {
        if (!show) setShow(true)
      }}
      {...props}
    >
      <SpoilerContent show={show}>{children}</SpoilerContent>
    </SpoilerComponent>
  )
}

export default Spoiler
