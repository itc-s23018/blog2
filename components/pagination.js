import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const Pagination = ({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = ''
}) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={(styles.prev, styles.iconText)}>
          <FontAwesomeIcon icon={faChevronLeft} color='var(--gray-25)' />
          <Link href={prevUrl}> {prevText} </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={(styles.next, styles.iconText)}>
          <Link href={nextUrl}> {nextText} </Link>
          <FontAwesomeIcon icon={faChevronRight} color='var(gray-25)' />
        </li>
      )}
    </ul>
  )
}

export default Pagination
