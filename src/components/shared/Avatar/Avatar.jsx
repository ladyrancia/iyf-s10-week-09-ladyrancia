function Avatar({ 
    src, 
    alt = '', 
    size = 'medium',
    rounded = true,
    ring = false
}) {
    const sizeClasses = {
        xs: 'h-4 w-4',
        sm: 'h-6 w-6',
        medium: 'h-8 w-8',
        lg: 'h-10 w-10',
        xl: 'h-12 w-12',
        '2xl': 'h-16 w-16'
    };

    const roundedClasses = rounded ? 'rounded-full' : 'rounded';

    const ringClasses = ring ? 'ring-2 ring-blue-500' : '';

    return (
        <img
            src={src}
            alt={alt}
            className={`
                ${sizeClasses[size]}
                ${roundedClasses}
                ${ringClasses}
                object-cover
            `}
        />
    );
}

export default Avatar;