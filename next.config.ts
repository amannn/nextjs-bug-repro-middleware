import type {NextConfig} from 'next';
import createBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: true
});

const nextConfig: NextConfig = {};

export default withBundleAnalyzer(nextConfig);
