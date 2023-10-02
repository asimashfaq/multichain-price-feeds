import {
  ArbFeedsContract_AnswerUpdated_handler,
  ArbFeedsContract_AnswerUpdated_loader,
  AvalancheFeedsContract_AnswerUpdated_handler,
  AvalancheFeedsContract_AnswerUpdated_loader,
  BscFeedsContract_AnswerUpdated_handler,
  BscFeedsContract_AnswerUpdated_loader,
  OpFeedsContract_AnswerUpdated_handler,
  OpFeedsContract_AnswerUpdated_loader,
  PolygonFeedsContract_AnswerUpdated_handler,
  PolygonFeedsContract_AnswerUpdated_loader,
} from "../generated/src/Handlers.gen";

import { feedEntity, priceEntity } from "../generated/src/Types.gen";

ArbFeedsContract_AnswerUpdated_loader(({ event, context }) => {
  // try load the feed from the event into memory
  context.feed.load(event.srcAddress.toString());
});

ArbFeedsContract_AnswerUpdated_handler(({ event, context }) => {
  let feed = context.feed.get(event.srcAddress.toString());

  // if the feed doesn't exist, create it
  if (!feed) {
    let newFeed: feedEntity = {
      id: event.srcAddress.toString(),
    };
    context.feed.set(newFeed);
  }

  let price: priceEntity = {
    id: event.transactionHash,
    contractAddress: event.srcAddress.toString(),
    price: event.params.current,
    roundId: event.params.roundId,
    updatedAt: event.params.updatedAt,
    blockTimestamp: event.blockTimestamp, // take note of the block timestamp and contrast this to the updatedAt field in order to check the average latency between the answer being posted and it actually getting on chain.
  };

  context.price.set(price);
});

BscFeedsContract_AnswerUpdated_loader(({ event, context }) => {
  // try load the feed from the event into memory
  context.feed.load(event.srcAddress.toString());
});

BscFeedsContract_AnswerUpdated_handler(({ event, context }) => {
  let feed = context.feed.get(event.srcAddress.toString());

  // if the feed doesn't exist, create it
  if (!feed) {
    let newFeed: feedEntity = {
      id: event.srcAddress.toString(),
    };
    context.feed.set(newFeed);
  }

  let price: priceEntity = {
    id: event.transactionHash,
    contractAddress: event.srcAddress.toString(),
    price: event.params.current,
    roundId: event.params.roundId,
    updatedAt: event.params.updatedAt,
    blockTimestamp: event.blockTimestamp, // take note of the block timestamp and contrast this to the updatedAt field in order to check the average latency between the answer being posted and it actually getting on chain.
  };

  context.price.set(price);
});

OpFeedsContract_AnswerUpdated_loader(({ event, context }) => {
  // try load the feed from the event into memory
  context.feed.load(event.srcAddress.toString());
});

OpFeedsContract_AnswerUpdated_handler(({ event, context }) => {
  let feed = context.feed.get(event.srcAddress.toString());

  // if the feed doesn't exist, create it
  if (!feed) {
    let newFeed: feedEntity = {
      id: event.srcAddress.toString(),
    };
    context.feed.set(newFeed);
  }

  let price: priceEntity = {
    id: event.transactionHash,
    contractAddress: event.srcAddress.toString(),
    price: event.params.current,
    roundId: event.params.roundId,
    updatedAt: event.params.updatedAt,
    blockTimestamp: event.blockTimestamp, // take note of the block timestamp and contrast this to the updatedAt field in order to check the average latency between the answer being posted and it actually getting on chain.
  };

  context.price.set(price);
});

PolygonFeedsContract_AnswerUpdated_loader(({ event, context }) => {
  // try load the feed from the event into memory
  context.feed.load(event.srcAddress.toString());
});

PolygonFeedsContract_AnswerUpdated_handler(({ event, context }) => {
  let feed = context.feed.get(event.srcAddress.toString());

  // if the feed doesn't exist, create it
  if (!feed) {
    let newFeed: feedEntity = {
      id: event.srcAddress.toString(),
    };
    context.feed.set(newFeed);
  }

  let price: priceEntity = {
    id: event.transactionHash,
    contractAddress: event.srcAddress.toString(),
    price: event.params.current,
    roundId: event.params.roundId,
    updatedAt: event.params.updatedAt,
    blockTimestamp: event.blockTimestamp, // take note of the block timestamp and contrast this to the updatedAt field in order to check the average latency between the answer being posted and it actually getting on chain.
  };

  context.price.set(price);
});

AvalancheFeedsContract_AnswerUpdated_loader(({ event, context }) => {
  // try load the feed from the event into memory
  context.feed.load(event.srcAddress.toString());
});

AvalancheFeedsContract_AnswerUpdated_handler(({ event, context }) => {
  let feed = context.feed.get(event.srcAddress.toString());

  // if the feed doesn't exist, create it
  if (!feed) {
    let newFeed: feedEntity = {
      id: event.srcAddress.toString(),
    };
    context.feed.set(newFeed);
  }

  let price: priceEntity = {
    id: event.transactionHash,
    contractAddress: event.srcAddress.toString(),
    price: event.params.current,
    roundId: event.params.roundId,
    updatedAt: event.params.updatedAt,
    blockTimestamp: event.blockTimestamp, // take note of the block timestamp and contrast this to the updatedAt field in order to check the average latency between the answer being posted and it actually getting on chain.
  };

  context.price.set(price);
});
