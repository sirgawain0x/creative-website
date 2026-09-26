---
id: intro
title: Introduction
sidebar_position: 1
---

# Creative Platform Documentation

## Description

The Creative Platform is a suite of Web3-powered software solutions designed to support creatives in monetizing their intellectual property and securing long-term wealth. By integrating blockchain technology with entertainment industry tools, the platform allows independent creators, fans, and brands to collaborate directly, bypassing traditional intermediaries.

## Our Core Ecosystem

To demonstrate value and attract early adopters, the platform consists of several active, interconnected products:

**Creative TV:** A decentralized live-streaming application where creators retain 100% of their streaming revenue and can monetize their live content directly as digital collectibles.

**Creator Assets:** A personalized digital asset system built on the Base network, giving creators their own digital representation to foster audience engagement and secure backing from fans.

**Creative Finance:** A Web3 financial product utilizing USDC on the Base network. It offers lending, borrowing, and high-yield interest vaults powered by Aave and Yearn technology.

**Creative AI:** A factory of specialized AI agents (led by our orchestrator, Adam) designed to handle day-to-day business activities and workflows for creative professionals.

**Creative Kidz:** An initiative providing mobile devices with preloaded creative tools to underserved children, funded through weekly digital art auctions.

## Assumptions & Business Model

This building process is based on the vision of creating a working, scalable product that assumes the following:

**Who will be the users?**
Independent creators (mostly audiovisual and music) on one side. On the other side, fans and institutions (brands) willing to support these creators in exchange for custom digital assets, IP ownership, and value-added propositions.

**What value does the product offer?**
A transparent financial and technological ecosystem that allows creatives to earn a living, digitize their work, and grow their wealth using decentralized finance (DeFi) tools.

**What problems does the product solve?**
The absence of a fair, creator-first digital economy. It removes middlemen, allowing creatives to progress in value based directly on their reputation and success.

**Revenue Generation**
Revenue generation and network utility will be driven by ecosystem transaction fees, royalty structures from minted digital assets, and the broader integration of protocol features managed by our community-governed entity, Creative Organization DAO, LLC.

**What determines the product's success and failure?**
Community acquisition, creator retention, the volume of capital locked into Creative Finance, and daily active usage metrics across the software suite.

![Creative Updated Flow](https://creativeplatform.xyz/img/mockups/Updated_Creative_Flow.png)

## Features & Requirements

The goal is to showcase the most important functionalities of the product to understand its underlying value, leaving aside any time-consuming features that do not support the core business.

**Must-Have Core Functionality:**

- Seamless user login and wallet creation using Alchemy (for platform apps) and Crossmint (for finance).
- Frictionless fiat-to-Web3 onboarding using regulated partners like Coinbase Onramp and Halliday.
- The ability to deploy smart contracts and digital assets on the Base network.
- Integration with Aave and Yearn smart contracts to generate yield on stable assets (USDC) within liquidity pools.
- The ability to deliver yielded funds to selected creators while splitting interest among participating users.

## Stages of Development

This project operates on a continuous feedback loop. These steps are repeated to ensure the software constantly improves and finds a dedicated audience.

### 1. Execution 🔨

This stage focuses entirely on building the tasks outlined in the current sprint. There is no time for side ideas here. The execution phase is complete when all sprint backlogs are reviewed and accepted. (Example: The landing page logs a user in via Alchemy, successfully routes a fiat purchase through Coinbase, and the UI updates the balance promptly.)

### 2. Review 📏

Review consists of analysis. This phase evaluates the performance of the newly built features using tangible metrics. It outlines the pros and cons of the current state and defines what stays and what goes. The review is done when there is an accurate report indicating exactly how to iterate. (Example: Transaction gas fees on Base are audited, user onboarding drop-off rates are measured, etc.)

### 3. Iteration 🔧

What proved to be wrong gets changed. This part defines new ways of executing processes based on the review data and paves the path for the next Execution phase. (Example: Adjusting the yield strategy in a Yearn vault to improve returns, or tweaking the UI to make the Halliday checkout faster.)

## Outline and Time Estimation

These are the core building blocks required to maintain a working product:

#### 1. UX Design

Creating user personas and journeys to help creators and fans navigate the Web3 tools quickly and easily, driving overall platform conversion.

#### 2. UI Design

Designing the user-facing parts of the application. We use Chakra and Next.js as our UI frameworks because they are optimized for React, have great community support, and allow for rapid active development.

#### 3. Coding & Infrastructure

- **Front-end:** Transforming the UI designs into fully functional client-side applications that communicate smoothly with the blockchain.
- **Smart Contracts & Back-end:** Managing the logic on the Base network, maintaining security, and integrating third-party protocols (Story Protocol, Aave, etc.).
- **Testing:** Runs in parallel with development to ensure total smart contract integrity and user safety.
