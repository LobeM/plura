import SubAccountDetails from '@/components/forms/subaccount-details';
import UserDetails from '@/components/forms/user-details';
import BlurPage from '@/components/global/blur-page';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react';

type Props = {
  params: { subaccountId: string };
};

const SubaccountSettingsPage = async ({ params }: Props) => {
  const authUser = await currentUser();
  if (!authUser) return;

  const userDetails = await db.user.findUnique({
    where: {
      email: authUser.emailAddresses[0].emailAddress,
    },
  });
  if (!userDetails) return;

  const subaccount = await db.subAccount.findUnique({
    where: { id: params.subaccountId },
  });
  if (!subaccount) return;

  const agencyDetails = await db.agency.findUnique({
    where: { id: subaccount.agencyId },
    include: { SubAccount: true },
  });
  if (!agencyDetails) return;

  const subaccounts = agencyDetails.SubAccount;

  return (
    <BlurPage>
      <div className='flex flex-col lg:!flex-row gap-4'>
        <SubAccountDetails
          agencyDetails={agencyDetails}
          details={subaccount}
          userId={userDetails.id}
          userName={userDetails.name}
        />
        <UserDetails
          type='subaccount'
          id={params.subaccountId}
          subAccounts={subaccounts}
          userData={userDetails}
        />
      </div>
    </BlurPage>
  );
};

export default SubaccountSettingsPage;
