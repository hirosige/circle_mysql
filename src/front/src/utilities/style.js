import { css } from 'styled-components'

export const Media = {
    xs: (...args) => css`
        @media (max-width: 575px) {
          ${ css(...args) }
        }
    `,

    sm: (...args) => css`
        @media (min-width: 576px) and (max-width: 767px) {
          ${ css(...args) }
        }
    `,

    md: (...args) => css`
        @media (min-width: 768px) and (max-width: 991px) {
          ${ css(...args) }
        }
    `,

    lg: (...args) => css`
        @media (min-width: 992px) and (max-width: 1199px) {
          ${ css(...args) }
        }
    `,

    xl: (...args) => css`
        @media (min-width: 1200px) {
          ${ css(...args) }
        }
    `,
};