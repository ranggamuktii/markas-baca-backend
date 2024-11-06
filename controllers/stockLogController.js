import StockLog from '../models/stockLogModel.js';

export const createStockLog = async (bookId, action, status) => {
  try {
    const newLog = new StockLog({
      bookId,
      action,
      quantity: 1,
      status,
    });
    await newLog.save();
  } catch (error) {
    console.error('Failed to create stock log:', error.message);
  }
};

export const getStockLogs = async (req, res) => {
  const { bookId } = req.params;
  try {
    const logs = await StockLog.find({ bookId }).sort({ timestamp: -1 });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
