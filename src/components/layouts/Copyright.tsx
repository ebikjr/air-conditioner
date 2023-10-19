import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import * as pkg from '~/../package.json'

const socialList = [
  {
    type: 'blog',
    color: '#6435C9',
    icon: 'i-mdi-earth',
    label: '博客：yunyoujun.cn',
    href: 'http://www.yunyoujun.cn',
  },
]

const Copyright: React.FC = () => {
  return (
    <div className="opacity-80 text-xs text-center mt-8">
      <div className="ac-text flex justify-center items-center m-2">
        {'© '}
        <a href={pkg.repository.url} target="_blank" rel="noreferrer">
          Air Conditioner Simulator Game
        </a>
        <a
          className="inline-flex"
          href="https://sponsors.yunyoujun.cn"
          target="_blank" rel="noreferrer"
          style={{ color: '#0078e7' }}
        >
          <div className="i-mdi-cloud text-sm mx-1" />
        </a>
        <a href={pkg.author.url} target="_blank" rel="noreferrer">
          云游君 @{pkg.author.name}
        </a>
      </div>
      <p>
        {`2023 - ${new Date().getFullYear()}`}
      </p>
      <div className="text-center">
        {socialList.map(item => (
          <Tooltip title={item.label} arrow key={item.type}>
            <IconButton
              sx={{ color: item.color }}
              href={item.href}
              target="_blank"
            >
              <div className={`${item.icon} text-lg`} />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export default Copyright
