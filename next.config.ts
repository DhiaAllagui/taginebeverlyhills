import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow @react-three packages that use .glsl / other non-standard imports */
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
