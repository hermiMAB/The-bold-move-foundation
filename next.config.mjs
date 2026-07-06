/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/focus-areas.html',
        destination: '/focus-areas',
        permanent: true,
      },
      {
        source: '/objectives.html',
        destination: '/objectives',
        permanent: true,
      },
      {
        source: '/partner.html',
        destination: '/partner',
        permanent: true,
      },
      {
        source: '/programs.html',
        destination: '/programs',
        permanent: true,
      },
      {
        source: '/team.html',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/who-we-serve.html',
        destination: '/who-we-serve',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
