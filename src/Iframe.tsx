interface IframeProps {
    url: string;
    id: string;
}

function Iframe({ url, id }: IframeProps) {
    return (
        <iframe data-cy="iframe" title="iframe" style={{ height: '100%', width: '100%' }} src={url} />
    );
};

export {
    Iframe,
}
