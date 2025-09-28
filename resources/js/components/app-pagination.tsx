import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import type { PaginationProps } from '@/types';

export default function AppPagination({ meta, links }: PaginationProps) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={meta.prev_page_url ?? ''} />
                </PaginationItem>

                {/* I exclude links with a label of Previous and Next */}
                {links
                    .filter(
                        (link) =>
                            !link.label.includes('Previous') &&
                            !link.label.includes('Next'),
                    )
                    .map((link, index) => (
                        <PaginationItem key={index}>
                            {link.url ? (
                                <PaginationLink
                                    href={link.url}
                                    isActive={link.active}
                                >
                                    {link.label}
                                </PaginationLink>
                            ) : (
                                <PaginationEllipsis />
                            )}
                        </PaginationItem>
                    ))}

                <PaginationItem>
                    <PaginationNext href={meta.next_page_url ?? ''} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
