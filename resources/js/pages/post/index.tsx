import AppPagination from '@/components/app-pagination';
import PostCreation from '@/components/post-creation';

import PostCard from '@/components/post-card';
import AppLayout from '@/layouts/app-layout';
import * as postRoutes from '@/routes/posts';
import type { BreadcrumbItem, PostProps } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: postRoutes.index().url,
    },
];

export default function Post({ posts, links, meta }: PostProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <PostCreation />

                <div className="relative grid min-h-[100vh] gap-4 overflow-hidden rounded-xl md:min-h-min md:grid-cols-2">
                    {posts?.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                <AppPagination meta={meta} links={links} />
            </div>
        </AppLayout>
    );
}
