import React from "react";
import { motion } from "framer-motion";

export const CategorySkeleton = () => {
  // Yeh loop 5 items generate karega (Aap ise change bhi kar sakte hain)
  const skeletonItems = Array(5).fill(0);

  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-gutter"
    >
      {skeletonItems.map((_, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          // Same styling as your original card + animate-pulse for loading effect
          className="bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(0,35,102,0.08)] animate-pulse"
        >
          {/* Icon Box Skeleton */}
          <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 mb-stack-md" />

          {/* Title Skeleton */}
          <div className="h-6 bg-gray-200 dark:bg-zinc-700 rounded-md w-3/4 mb-4" />

          {/* Description Skeleton (2 lines) */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded-md w-full" />
            <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded-md w-5/6" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export function SubServiceSkeleton() {
  // Yeh loop default 6 items (cards) screen par generate karega
  const skeletonCards = Array(6).fill(0);

  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      // Same grid layout as your main cards grid
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
    >
      {skeletonCards.map((_, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,35,102,0.08)] overflow-hidden animate-pulse border border-outline-variant/30"
        >
          {/* Image Placeholder */}
          <div className="h-48 bg-gray-200 dark:bg-zinc-700 w-full" />

          {/* Content Wrapper */}
          <div className="p-stack-md">
            {/* Title & Rating Line */}
            <div className="flex justify-between items-start mb-4">
              <div className="h-6 bg-gray-200 dark:bg-zinc-700 rounded-md w-2/3" />
              <div className="h-5 bg-gray-200 dark:bg-zinc-700 rounded-md w-10" />
            </div>

            {/* Location Line */}
            <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded-md w-1/2 mb-5" />

            {/* Contact & Timing Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 dark:bg-zinc-700 rounded-full" />
                <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded-md w-1/3" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 dark:bg-zinc-700 rounded-full" />
                <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded-md w-1/2" />
              </div>
            </div>

            {/* Action Buttons Line */}
            <div className="flex gap-2 pt-3 border-t border-outline-variant">
              <div className="flex-1 h-9 bg-gray-200 dark:bg-zinc-700 rounded-lg" />
              <div className="flex-1 h-9 bg-gray-200 dark:bg-zinc-700 rounded-lg" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
