import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { Loader2Icon, Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function PostCreation() {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset, setError } =
        useForm({
            content: '',
        });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (data.content === '') {
            setError('content', 'The content field is required');
            return;
        }

        if (data.content.length < 10) {
            setError('content', 'Your post must be 10 characters or above');
            return;
        }

        post('/posts', {
            onSuccess: () => {
                setOpen(false);
                toast.success('Post created successfully');
                reset();
            },
        });
    }

    return (
        <div className="mb-2 self-end">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="cursor-pointer">
                        <Plus />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create a post</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Textarea
                                placeholder="Type here..."
                                value={data.content}
                                onChange={(e) =>
                                    setData('content', e.target.value)
                                }
                            />
                            {errors.content && (
                                <p className="text-sm text-red-400/80">
                                    {errors.content}
                                </p>
                            )}
                        </div>
                        <DialogFooter className="mt-6">
                            <DialogClose asChild>
                                <Button
                                    variant="outline"
                                    className="cursor-pointer"
                                >
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                variant="secondary"
                                className="w-30 cursor-pointer"
                                disabled={processing}
                            >
                                {processing ? (
                                    <Loader2Icon className="animate-spin" />
                                ) : (
                                    'Create'
                                )}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
