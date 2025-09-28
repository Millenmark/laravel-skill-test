import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import * as postRoutes from '@/routes/posts';
import { Post } from '@/types';
import { Link, useForm } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface PostCardProps {
    post: Post;
    isShown?: boolean;
}

export default function PostCard({ post, isShown = false }: PostCardProps) {
    const { delete: destroy, processing, errors, setError } = useForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        destroy(`/posts/${post.id}`, {
            onSuccess: () => toast.success('Post deleted successfully'),
            onError: () => toast.error("You can't delete this post"),
        });
    };

    return (
        <Card key={post.id}>
            <CardHeader>
                {post.user.name}{' '}
                <CardDescription>
                    {new Date(post.created_at).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    })}
                </CardDescription>
                {!isShown && (
                    <CardAction>
                        <Link href={postRoutes.show({ id: post.id })}>
                            <Button className="cursor-pointer">View</Button>
                        </Link>
                    </CardAction>
                )}
            </CardHeader>
            <CardContent>{post.content}</CardContent>
            {post.canDelete && (
                <CardFooter className="flex justify-end gap-2">
                    <form onSubmit={handleSubmit}>
                        <Button
                            type="submit"
                            variant="destructive"
                            className="w-full cursor-pointer"
                        >
                            <Trash2 />
                        </Button>
                    </form>
                </CardFooter>
            )}
        </Card>
    );
}
