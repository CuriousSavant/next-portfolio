import Link from 'next/link'
import styled from '@emotion/styled'
import TerminalIcon from './terminal'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 1;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    return (
        (<Link href="/" scroll={false}>
            <LogoBox>
                <TerminalIcon />
                <h1
                    className='ml-2'
                >
                    C-S
                </h1>
            </LogoBox>
        </Link>
        )
    );
}

export default Logo
