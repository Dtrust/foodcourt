import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = props => (
    <ContentLoader
        className="product--skeleton"
        speed={2}
        width={360}
        height={480}
        viewBox="0 0 360 480"
        backgroundColor="#5b5b5b"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="180" cy="105" r="103" />
        <rect x="80" y="225" rx="0" ry="0" width="204" height="26" />
        <rect x="80" y="266" rx="0" ry="0" width="201" height="13" />
        <rect x="80" y="289" rx="0" ry="0" width="201" height="13" />
        <rect x="80" y="397" rx="30" ry="30" width="201" height="61" />
        <rect x="80" y="325" rx="0" ry="0" width="201" height="52" />
    </ContentLoader>
);

export default Skeleton;
