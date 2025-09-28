import PostCard from '@/components/post-card';
import AppLayout from '@/layouts/app-layout';
import * as postRoutes from '@/routes/posts';
import type { BreadcrumbItem } from '@/types';
import { Post } from '@/types';
import { Head } from '@inertiajs/react';

export default function ShowPost({ post }: { post: Post }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Posts',
            href: postRoutes.index().url,
        },
        {
            title: `${post.user.name}`,
            href: '',
        },
    ];

    console.log({ post });
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`${post.user.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <PostCard post={post} isShown />
            </div>
        </AppLayout>
    );
}
