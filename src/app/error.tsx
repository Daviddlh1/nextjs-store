'use client'
import Image from 'next/image'
import styles from '@/sass/global-error.module.sass'

export default function GlobalError({ reset }: ErrorPageProps) {
    return (
        <>
            <main className={styles.Error}>
                <h1 className={styles.Error__title}>There was an error</h1>
                <Image
                    src='/images/error.png'
                    width={500}
                    height={500}
                    alt='Error'
                />
                <p className={styles.Error__message}>It seems there was an error</p>
                <button className={styles.Error__button} onClick={reset}>Retry</button>
            </main>
        </>
    )
}