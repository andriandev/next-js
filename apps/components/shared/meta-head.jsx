import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  siteBaseUrl,
  siteFaviconUrl,
  siteTitle,
  siteDescription,
  siteIndex,
} from '@/config/setting';

function MetaHead(props) {
  // Get canonical url
  const { asPath } = useRouter();

  // Delete params '?' and '#'
  let urlPath = '';
  if (asPath.includes('?')) {
    urlPath = asPath.split('?')[0];
  } else if (asPath.includes('#')) {
    urlPath = asPath.split('#')[0];
  } else {
    urlPath = asPath;
  }

  // Define variabel
  const baseUrl = siteBaseUrl();
  const faviconUrl = siteFaviconUrl();
  const faviconType = faviconUrl.split('.');

  const title =
    urlPath == '/' ? props.title : `${props.title} - ${siteTitle()}`;
  const index = props.index == 'noindex' ? 'noindex, nofollow' : props.index;
  const canonical = props.canonical
    ? baseUrl + '/' + props.canonical
    : baseUrl + urlPath;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={props.description} />
      <meta name="robots" content={index} />
      <link rel="canonical" href={canonical} />
      <link
        rel="icon"
        type={`image/${faviconType[faviconType.length - 1]}`}
        href={faviconUrl.includes('http') ? faviconUrl : baseUrl + faviconUrl}
      />
    </Head>
  );
}

MetaHead.defaultProps = {
  title: siteTitle(),
  description: siteDescription(),
  index: siteIndex(),
};

export default MetaHead;
