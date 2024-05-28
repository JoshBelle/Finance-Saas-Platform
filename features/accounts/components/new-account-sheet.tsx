import { useNewAccount } from '@/features/accounts/hooks/use-new-account';
import { AccountForm } from './account-form';
import { insertAccountSchema } from '@/db/schema';
import { z } from 'zod';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

const formSchema = insertAccountSchema.pick({
    name: true,
})

type FormValues  = z.infer<typeof formSchema>

export const NewAccountSheet = () => {
    const { isOpen, onClose} = useNewAccount();

    const onSubmit = (values: FormValues) => {
        console.log({ values });
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4 ">
                <SheetHeader>
                    <SheetTitle>New Account</SheetTitle>
                    <SheetDescription>
                        Create new account to track your transactions.
                    </SheetDescription>
                </SheetHeader>
                <AccountForm 
                    onSubmit={onSubmit} 
                    disabled={false} 
                    onDelete={() => {}}
                    defaultValues={{
                        name: ''
                    }}
                />
            </SheetContent>
        </Sheet>
    );
};
