import React, { useEffect, useCallback, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { CardBody, ArrowDownIcon, Button, IconButton, Text } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import UnlockButton from 'components/UnlockButton'
import InputPanel from './InputPanel'
import { BottomGrouping, Wrapper, AppWrapper, BodyWrapper } from './Styleds'
import PageHeader from './PageHeader'
import AppBody from './AppBody'

export interface FarmsProps {
    tokenMode?: boolean
}

const Referral: React.FC<FarmsProps> = (farmsProps) => {
    const { account } = useWallet()
    return (
        <Page>
            <AppWrapper>
                <BodyWrapper>
                    <AppBody>
                        <Wrapper id="refer-page">
                            <PageHeader title="Referral" description="Trade tokens in an instant" />
                            <CardBody>
                                <InputPanel />
                                <BottomGrouping>
                                    {!account ? (
                                        <UnlockButton fullWidth />
                                    ) : (
                                        <Button fullWidth>
                                            Save
                                        </Button>
                                    )}
                                </BottomGrouping>
                            </CardBody>
                        </Wrapper>
                    </AppBody>
                </BodyWrapper>
            </AppWrapper>
        </Page>
    )
}

export default Referral