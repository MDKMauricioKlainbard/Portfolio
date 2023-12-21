import styles from './Badges.module.css'
import React from 'react'
import Badge from '../../components/Badge/Badge'

export default function Badges({ arrayBadges }) {
    return (
        <>
            {arrayBadges.map(badge => {
                return (
                    <Badge badge={badge} />
                )
            })}
        </>
    )
}