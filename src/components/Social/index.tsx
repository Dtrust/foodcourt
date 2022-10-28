import React from 'react';

import icons from '../../assets/images/icons.svg';

import './Social.sass';

type SocialItem = {
    id: number;
    name: string;
    link: string;
};

const socialItems: SocialItem[] = [
    { id: 0, name: 'facebook', link: '#' },
    { id: 1, name: 'instagram', link: '#' },
    { id: 2, name: 'viber', link: '#' },
    { id: 3, name: 'telegram', link: '#' },
];

export const Social: React.FC = () => {
    return (
        <ul className="social">
            {socialItems.map(({ id, name, link }) => (
                <li key={id} className="social-item">
                    <a className="social-link" href={link} title={name}>
                        <span className="visually-hidden">{name}</span>
                        <svg
                            className={`social-icon ${name}`}
                            width="30"
                            height="30"
                        >
                            <use href={`${icons}#${name}`} />
                        </svg>
                    </a>
                </li>
            ))}
        </ul>
    );
};
